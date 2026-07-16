import React from 'react';
import { Text, TextInput, PasswordInput, Checkbox, Stack, Divider, Group, Title, Anchor, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SocialIcon } from 'react-social-icons';
import PasswordRecovery from '../modals/PasswordRecovery';
import classes from './FormRegistration.module.css';

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
        className={classes.form}
      >
        <Stack>
          <div className={classes.title}>
            <Title order={2} fw={700}>Войти в систему</Title>
            <Text c="dimmed">Используйте привычный способ входа</Text>
          </div>

          <Group justify="center" gap="sm">
            <Anchor href="#"><SocialIcon network="yandex" className={classes.socialIcon} /></Anchor>
            <Anchor href="#"><SocialIcon network="vk" className={classes.socialIcon} /></Anchor>
            <Anchor href="#"><SocialIcon network="github" className={classes.socialIcon} /></Anchor>
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
