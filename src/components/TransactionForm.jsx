import {
  FormControl,
  FormLabel,
  Modal,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Radio,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const TransactionForm = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter Transaction description"
                  name="description"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  placeholder="Enter Transaction amount"
                  name="amount"
                  type="number"
                />
              </FormControl>
              <RadioGroup mt="5" value="">
                <Radio value="income" colorScheme="blue" name="type">
                  Income
                </Radio>
                <Radio value="expense" colorScheme="red" name="type">
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} mr={"4"}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
};
export default TransactionForm;
