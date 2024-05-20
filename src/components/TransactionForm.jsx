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
import { useContext } from "react";
import { GlobalContext } from "../context";

const TransactionForm = ({ onClose, isOpen }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
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
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  placeholder="Enter Transaction amount"
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                />
              </FormControl>
              <RadioGroup mt="5" value={value} onChange={setValue}>
                <Radio
                  checked={formData.type === "income"}
                  value="income"
                  colorScheme="blue"
                  name="type"
                  onChange={handleFormChange}
                >
                  Income
                </Radio>
                <Radio
                  checked={formData.type === "expense"}
                  value="expense"
                  colorScheme="red"
                  name="type"
                  onChange={handleFormChange}
                >
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} mr={"4"}>
                Cancel
              </Button>
              <Button type="submit" onClick={onClose}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
};
export default TransactionForm;
