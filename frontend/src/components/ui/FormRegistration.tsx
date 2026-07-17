import React from 'react';
import { Text, TextInput, PasswordInput, Checkbox, Stack, Divider, Group, Title, Anchor, Button, Box } from '@mantine/core';
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
      <Box
        component="form"
        onSubmit={form.onSubmit(onSubmit)}
        maw={380}
        mx="auto"
        h="100vh"
        display="flex"
        direction="column"
        justify="center"
        p={20}
      >
        <Stack>
          <Box ta="center">
            <Title order={2} fw={700}>Войти в систему</Title>
            <Text c="dimmed">Используйте привычный способ входа</Text>
          </Box>

          <Group justify="center" gap="sm">
            <Anchor href="#"><Box w={40} h={40}><SocialIcon network="yandex" /></Box></Anchor>
            <Anchor href="#"><Box w={40} h={40}><SocialIcon network="vk" /></Box></Anchor>
            <Anchor href="#"><Box w={40} h={40}><SocialIcon network="github" /></Box></Anchor>
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
      </Box>
      <PasswordRecovery isVisible={showModal} onClose={closeModal} />
    </>
  );
};

export default FormRegistration;
