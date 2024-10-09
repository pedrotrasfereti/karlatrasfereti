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
} from '@chakra-ui/react';

function Stepper({ activeStep, steps }) {
  return (
    <ChakraStepper index={activeStep} w="full" colorScheme="green">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}

export default Stepper;
