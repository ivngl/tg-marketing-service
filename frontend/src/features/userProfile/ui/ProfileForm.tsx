import React from 'react';
import { Text, TextInput, Title, Paper, Stack, Group, Button } from '@mantine/core';
import { useUserProfileForm } from '../model/useUserProfileForm';
import classes from './ProfileForm.module.css';

export const ProfileForm: React.FC = () => {
  const { data, setData, errors, setErrors, handleSubmit, processing } =
    useUserProfileForm();

  const handleChange = (field: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(field, e.target.value);
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <Stack gap="lg">
      <Group grow wrap="wrap">
        <form
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Paper p="lg" radius="sm">
            <Title order={3} mb="md" ta="left">Информация о профиле</Title>
            <Stack>
              <Group grow wrap="wrap">
                <TextInput
                  label="Имя"
                  type="text"
                  value={data.first_name}
                  onChange={handleChange('first_name')}
                  error={errors.first_name || undefined}
                />
                <TextInput
                  label="Email"
                  type="email"
                  value={data.email}
                  onChange={handleChange('email')}
                  error={errors.email || undefined}
                />
              </Group>
              <TextInput
                label="Компания"
                type="text"
                value={data.company}
                onChange={handleChange('company')}
                error={errors.company || undefined}
              />
              <Button
                type="submit"
                loading={processing}
                variant="gradient"
                gradient={{ from: 'blue.5', to: 'blue.6' }}
                w="fit-content"
              >
                {processing ? 'Сохранение...' : 'Сохранить изменения'}
              </Button>
            </Stack>
          </Paper>
        </form>

        <Paper p="lg" radius="sm" className={classes.colNarrow}>
          <Title order={3} mb="md" ta="left">Подписка Pro</Title>
          <Text c="dimmed">Заглушка для формы подписки.</Text>
        </Paper>
      </Group>

      <Group grow wrap="wrap">
        <Paper p="lg" radius="sm" className={classes.colWide}>
          <Title order={3} mb="md" ta="left">Уведомления</Title>
          <Text c="dimmed">Заглушка для формы уведомлений.</Text>
        </Paper>

        <Paper p="lg" radius="sm" className={classes.colNarrow}>
          <Title order={3} mb="md" ta="left">Статистика использования</Title>
          <Text c="dimmed">Заглушка для статистики.</Text>
        </Paper>
      </Group>
    </Stack>
  );
};
