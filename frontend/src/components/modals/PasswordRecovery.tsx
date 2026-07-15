import React from 'react';
import { Modal, TextInput, Button, Stack, Text, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';

interface PasswordRecoveryProps {
  isVisible: boolean;
  onClose: () => void;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ isVisible, onClose }) => {
  const { register } = useForm();

  return (
    <Modal opened={isVisible} onClose={onClose} title="Восстановление пароля" centered>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack gap="md">
          <Text size="sm">Введите ваш email</Text>
          <TextInput
            {...register('email', { required: 'This is required.' })}
            type="email"
            placeholder="E-mail"
          />
          <Group justify="space-between">
            <Button type="submit" color="blue">Отправить ссылку</Button>
            <Button variant="subtle" onClick={onClose}>Отмена</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};

export default PasswordRecovery;
