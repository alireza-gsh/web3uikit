import { useCallback } from 'react';
import {
    DivInnerStyledOptionsContainer,
    DivStyledNoData,
    DivStyledOptionItem,
    DivStyledOptionsContainer,
    DivStyledSelected,
    StyledSelectParentDiv,
} from './Dropdown.styles';
import { useState, useEffect } from 'react';
import { IDropdown } from './types';
import { Illustration } from '../Illustrations';
import { Icon } from '@web3uikit/icons';
import { OptionProps } from '../Select';
import { Typography } from '../Typography';

const Dropdown: React.FC<IDropdown> = ({
    defaultOptionIndex,
    hasOutline = true,
    hideSelected = true,
    icon,
    isDisabled = false,
    isLabelFixed = true,
    isLabelVisible = true,
    label,
    onChange,
    options,
    selectedState,
    showSelected = true,
    width = '250px',
    dropdownArrowType = 'normal',
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] =
        useState<number | undefined>(defaultOptionIndex);
    useEffect(() => {
        if (isDisabled) {
            setIsOpen(false);
        }
    }, [isDisabled, isOpen]);
    useEffect(() => {
        if (typeof selectedState == 'number') {
            setSelectedIndex(selectedState);
        }
    }, [selectedState, selectedIndex]);

    const handleSelectOptionClick = (selectedOption: OptionProps) => {
        setIsOpen(false);
        const indexOf = options.indexOf(selectedOption);
        setSelectedIndex(indexOf);
        onChange(selectedOption);
    };

    const RenderOptions = useCallback(() => {
        if (
            options.length == 0 ||
            (options.length == 1 && selectedIndex != null && hideSelected)
        ) {
            return (
                <DivStyledOptionsContainer
                    width={width}
                    isOpen={isOpen}
                    {...props}
                >
                    <DivInnerStyledOptionsContainer>
                        <DivStyledNoData>
                            <Illustration
                                logo="looking"
                                width={'100%'}
                                height={'100px'}
                            />
                            <Typography variant="caption14" weight="400">
                                No Data
                            </Typography>
                        </DivStyledNoData>
                    </DivInnerStyledOptionsContainer>
                </DivStyledOptionsContainer>
            );
        }
        return (
            <DivStyledOptionsContainer
                isOpen={isOpen}
                data-testid="optionsContainer"
                width={width}
            >
                <DivInnerStyledOptionsContainer>
                    {options
                        .filter(
                            (optionItem) =>
                                options.indexOf(optionItem) != selectedIndex ||
                                !hideSelected,
                        )
                        .map((option) => (
                            <DivStyledOptionItem
                                onClick={() => {
                                    handleSelectOptionClick(option);
                                }}
                                key={option.id}
                            >
                                {option?.prefix}
                                {isLabelVisible && (
                                    <Typography
                                        variant="caption14"
                                        weight="400"
                                        color="#041836"
                                    >
                                        {option.label}
                                    </Typography>
                                )}
                            </DivStyledOptionItem>
                        ))}
                </DivInnerStyledOptionsContainer>
            </DivStyledOptionsContainer>
        );
    }, [isOpen]);

    return (
        <StyledSelectParentDiv
            width={width}
            data-testid="popoverSelect"
            isDisabled={isDisabled}
        >
            <DivStyledSelected
                width={width}
                onClick={() => {
                    if (!isDisabled) {
                        setIsOpen(!isOpen);
                    }
                }}
                isOpen={!!isOpen}
                hasOutline={hasOutline}
            >
                <div>
                    <span>
                        {icon && (
                            <Icon
                                size={24}
                                svg={icon}
                                style={{
                                    fill: 'currentColor',
                                }}
                            />
                        )}
                        {typeof selectedIndex == 'number' &&
                            options[selectedIndex]?.prefix &&
                            options[selectedIndex]?.prefix}
                    </span>
                    {isLabelVisible && (
                        <Typography variant="caption14" weight="400">
                            {(isLabelFixed ||
                                typeof selectedIndex != 'number') &&
                                label}
                            {typeof selectedIndex === 'number' &&
                                showSelected &&
                                options[selectedIndex]?.label}
                        </Typography>
                    )}
                    <Icon
                        size={24}
                        svg={
                            dropdownArrowType === 'normal'
                                ? isOpen
                                    ? 'chevronUp'
                                    : 'chevronDown'
                                : isOpen
                                ? 'triangleUp'
                                : 'triangleDown'
                        }
                        style={{
                            fill: 'currentColor',
                        }}
                    />
                </div>
            </DivStyledSelected>
            <RenderOptions />
        </StyledSelectParentDiv>
    );
};

export default Dropdown;
