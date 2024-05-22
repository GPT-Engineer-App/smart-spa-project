import React, { useState, useEffect } from "react";
import { Container, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Input, Select, useToast } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Banking App</Text>
          <HStack spacing={4}>
            <Button as={Link} to="/users">
              Users
            </Button>
            <Button as={Link} to="/banks">
              Banks
            </Button>
          </HStack>
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/banks" element={<BanksPage />} />
          </Routes>
        </VStack>
      </Container>
    </Router>
  );
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [banks, setBanks] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserCount, setNewUserCount] = useState(1);
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
    fetchBanks();
    const interval = setInterval(() => {
      cleanupData();
    }, 120000); // 2 minutes
    return () => clearInterval(interval);
  }, []);

  const fetchUsers = async () => {
    // Fetch users from backend
    // Example: const response = await fetch('/api/users');
    // setUsers(await response.json());
  };

  const fetchBanks = async () => {
    // Fetch banks from backend
    // Example: const response = await fetch('/api/banks');
    // setBanks(await response.json());
  };

  const addUser = async () => {
    // Fetch random users and add to backend
    // Example: const response = await fetch(`https://random-data-api.com/api/users/random_user?size=${newUserCount}`);
    // const newUsers = await response.json();
    // setUsers([...users, ...newUsers]);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const deleteUser = async (userId) => {
    // Delete user from backend
    // Example: await fetch(`/api/users/${userId}`, { method: 'DELETE' });
    setUsers(users.filter((user) => user.id !== userId));
  };

  const cleanupData = async () => {
    // Cleanup unrelated data from backend
    // Example: await fetch('/api/cleanup', { method: 'POST' });
    fetchUsers();
    fetchBanks();
    toast({
      title: "Cleanup completed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} width="100%">
      <HStack spacing={4}>
        <Input type="number" value={newUserCount} onChange={(e) => setNewUserCount(e.target.value)} />
        <Button leftIcon={<FaPlus />} onClick={addUser}>
          Add Users
        </Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<FaEdit />} onClick={() => editUser(user)} />
                  <IconButton icon={<FaTrash />} onClick={() => deleteUser(user.id)} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {editingUser && <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} />}
    </VStack>
  );
};

const BanksPage = () => {
  const [banks, setBanks] = useState([]);
  const [editingBank, setEditingBank] = useState(null);
  const [newBankCount, setNewBankCount] = useState(1);

  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    // Fetch banks from backend
    // Example: const response = await fetch('/api/banks');
    // setBanks(await response.json());
  };

  const addBank = async () => {
    // Fetch random banks and add to backend
    // Example: const response = await fetch(`https://random-data-api.com/api/banks/random_bank?size=${newBankCount}`);
    // const newBanks = await response.json();
    // setBanks([...banks, ...newBanks]);
  };

  const editBank = (bank) => {
    setEditingBank(bank);
  };

  const deleteBank = async (bankId) => {
    // Delete bank from backend
    // Example: await fetch(`/api/banks/${bankId}`, { method: 'DELETE' });
    setBanks(banks.filter((bank) => bank.id !== bankId));
  };

  return (
    <VStack spacing={4} width="100%">
      <HStack spacing={4}>
        <Input type="number" value={newBankCount} onChange={(e) => setNewBankCount(e.target.value)} />
        <Button leftIcon={<FaPlus />} onClick={addBank}>
          Add Banks
        </Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Bank Name</Th>
            <Th>Routing Number</Th>
            <Th>SWIFT/BIC</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {banks.map((bank) => (
            <Tr key={bank.id}>
              <Td>{bank.id}</Td>
              <Td>{bank.bank_name}</Td>
              <Td>{bank.routing_number}</Td>
              <Td>{bank.swift_bic}</Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<FaEdit />} onClick={() => editBank(bank)} />
                  <IconButton icon={<FaTrash />} onClick={() => deleteBank(bank.id)} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {editingBank && <EditBankModal bank={editingBank} onClose={() => setEditingBank(null)} />}
    </VStack>
  );
};

const EditUserModal = ({ user, onClose }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user in backend
    // Example: await fetch(`/api/users/${user.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    onClose();
  };

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit}>
      <Input name="username" value={formData.username} onChange={handleChange} />
      <Input name="email" value={formData.email} onChange={handleChange} />
      <Button type="submit">Save</Button>
    </VStack>
  );
};

const EditBankModal = ({ bank, onClose }) => {
  const [formData, setFormData] = useState(bank);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update bank in backend
    // Example: await fetch(`/api/banks/${bank.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    onClose();
  };

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit}>
      <Input name="bank_name" value={formData.bank_name} onChange={handleChange} />
      <Input name="routing_number" value={formData.routing_number} onChange={handleChange} />
      <Input name="swift_bic" value={formData.swift_bic} onChange={handleChange} />
      <Button type="submit">Save</Button>
    </VStack>
  );
};

export default Index;
