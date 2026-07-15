import React from 'react';
import { TextInput, PasswordInput, Button, Checkbox, Stack, Divider, Group, Text, Title, Anchor } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import { SocialIcon } from 'react-social-icons';
import PasswordRecovery from '../modals/PasswordRecovery';

interface FormData {
  email: string;
  password: string;
  remember?: boolean;
}

const FormRegistration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);

  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = (data: FormData) => {
    Inertia.post('/users', data as Record<string, any>, {
      onSuccess: (page) => {
        console.log('Успешный ответ от сервера:', page);
      },
      onError: (errors) => {
        console.log('Ошибки формы:', errors);
      },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 380, margin: 'auto', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 }}
      >
        <Stack gap="md">
          <div style={{ textAlign: 'center' }}>
            <Title order={2} fw={700}>Войти в систему</Title>
            <Text c="dimmed">Используйте привычный способ входа</Text>
          </div>

          <Group justify="center" gap="sm">
            <Anchor href="#"><SocialIcon network="yandex" style={{ height: 40, width: 40 }} /></Anchor>
            <Anchor href="#"><SocialIcon network="vk" style={{ height: 40, width: 40 }} /></Anchor>
            <Anchor href="#"><SocialIcon network="github" style={{ height: 40, width: 40 }} /></Anchor>
          </Group>

          <Divider label="или" labelPosition="center" />

          <TextInput
            {...register('email', { required: 'This is required.' })}
            type="email"
            placeholder="E-mail"
          />

          <PasswordInput
            {...register('password', { required: 'This is required.' })}
            placeholder="Пароль"
          />

          <Checkbox
            {...register('remember')}
            label="Запомнить меня"
          />

          <Stack gap="sm" align="center">
            <Button type="submit" fullWidth color="blue">
              Войти
            </Button>
            <Button variant="subtle" onClick={openModal}>
              Забыли пароль?
            </Button>
          </Stack>
        </Stack>
      </form>
      <PasswordRecovery isVisible={showModal} onClose={closeModal} />
    </>
  );
};

export default FormRegistration;
