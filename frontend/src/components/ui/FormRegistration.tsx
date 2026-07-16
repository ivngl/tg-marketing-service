import React from 'react';
import { TextInput, PasswordInput, Checkbox, Stack, Divider, Group, Title, Anchor } from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { useForm } from '@mantine/form';
import { SocialIcon } from 'react-social-icons';
import PasswordRecovery from '../modals/PasswordRecovery';

const FormRegistration: React.FC = () => {
  const form = useForm({
    initialValues: { email: '', password: '', remember: false },
    validate: {
      email: (val) => (!val || !/^\S+@\S+\.\S+$/.test(val) ? 'Некорректный email' : null),
      password: (val) => (!val || val.length < 6 ? 'Минимум 6 символов' : null),
    },
  });

  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmit = (values: { email: string; password: string; remember: boolean }) => {
    console.log('Login:', values.email);
  };

  return (
    <>
      <form
        onSubmit={form.onSubmit(onSubmit)}
        style={{ maxWidth: 380, margin: 'auto', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 }}
      >
        <Stack gap="md">
          <div style={{ textAlign: 'center' }}>
            <Title order={2} fw={700}>Войти в систему</Title>
            <Text variant="dimmed">Используйте привычный способ входа</Text>
          </div>

          <Group justify="center" gap="sm">
            <Anchor href="#"><SocialIcon network="yandex" style={{ height: 40, width: 40 }} /></Anchor>
            <Anchor href="#"><SocialIcon network="vk" style={{ height: 40, width: 40 }} /></Anchor>
            <Anchor href="#"><SocialIcon network="github" style={{ height: 40, width: 40 }} /></Anchor>
          </Group>

          <Divider label="или" labelPosition="center" />

          <TextInput
            {...form.getInputProps('email')}
            type="email"
            placeholder="E-mail"
          />

          <PasswordInput
            {...form.getInputProps('password')}
            placeholder="Пароль"
          />

          <Checkbox
            {...form.getInputProps('remember', { type: 'checkbox' })}
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
