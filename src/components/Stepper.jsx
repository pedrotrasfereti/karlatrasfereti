import {
  Stepper as ChakraStepper,
  Step,
  StepIndicator,
  StepStatus,
  StepNumber,
  StepIcon,
  Box,
  StepTitle,
  StepSeparator,
  StepDescription,
} from '@chakra-ui/react';

function Stepper({ activeStep, steps, setActiveStep }) {
  const handleSetStep = (value) => {
    if (value < activeStep) setActiveStep(value);
  };

  return (
    <ChakraStepper
      index={activeStep}
      w="full"
      colorScheme="green"
      size={{ base: 'sm', md: 'md' }}
    >
      {steps.map((step, index) => (
        <Step key={index} onClick={() => handleSetStep(index + 1)}>
          <StepIndicator cursor="pointer">
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0" cursor="pointer">
            <StepTitle display={{ base: 'none', md: 'block' }}>
              {step.title}
            </StepTitle>

            <StepDescription display={{ base: 'block', md: 'none' }}>
              {step.title}
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}

export default Stepper;
