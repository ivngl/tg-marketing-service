import React from 'react';
import { TextInput, Button, Title, Text, Paper, Stack, Group, SimpleGrid } from '@mantine/core';
import { useUserProfileForm } from '../model/useUserProfileForm';

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
          style={{ flex: '2 1 0', minWidth: 0 }}
        >
          <Paper withBorder p="lg" radius="sm">
            <Title order={3} mb="md" ta="left">Информация о профиле</Title>
            <Stack gap="md">
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

        <Paper withBorder p="lg" radius="sm" style={{ flex: '1 1 0', minWidth: 0 }}>
          <Title order={3} mb="md" ta="left">Подписка Pro</Title>
          <Text c="dimmed">Заглушка для формы подписки.</Text>
        </Paper>
      </Group>

      <Group grow wrap="wrap">
        <Paper withBorder p="lg" radius="sm" style={{ flex: '2 1 0', minWidth: 0 }}>
          <Title order={3} mb="md" ta="left">Уведомления</Title>
          <Text c="dimmed">Заглушка для формы уведомлений.</Text>
        </Paper>

        <Paper withBorder p="lg" radius="sm" style={{ flex: '1 1 0', minWidth: 0 }}>
          <Title order={3} mb="md" ta="left">Статистика использования</Title>
          <Text c="dimmed">Заглушка для статистики.</Text>
        </Paper>
      </Group>
    </Stack>
  );
};
