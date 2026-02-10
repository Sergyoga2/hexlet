import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  List,
  Button,
  Badge,
  ThemeIcon,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

const plans = [
  {
    name: 'Старт',
    price: 'Бесплатно',
    description: 'Для знакомства с платформой',
    features: ['До 3 проектов', '1 ГБ хранилища', 'Email-поддержка'],
    highlighted: false,
  },
  {
    name: 'Бизнес',
    price: '2 990 ₽/мес',
    description: 'Для растущих команд',
    features: [
      'Безлимит проектов',
      '50 ГБ хранилища',
      'Приоритетная поддержка',
      'Аналитика',
    ],
    highlighted: true,
  },
  {
    name: 'Корпоративный',
    price: 'По запросу',
    description: 'Индивидуальные условия',
    features: [
      'Всё из Бизнес',
      'SLA 99.99%',
      'Выделенный менеджер',
      'On-premise установка',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <div style={{ backgroundColor: 'var(--mantine-color-gray-0)', padding: '80px 0' }}>
      <Container size="lg">
        <Title order={2} ta="center" mb="md">
          Тарифы
        </Title>
        <Text ta="center" c="dimmed" mb={50}>
          Выберите план, который подходит вашей команде
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              shadow={plan.highlighted ? 'md' : 'sm'}
              padding="xl"
              radius="md"
              withBorder={plan.highlighted}
              style={
                plan.highlighted
                  ? { borderColor: 'var(--mantine-color-blue-6)', borderWidth: 2 }
                  : undefined
              }
            >
              {plan.highlighted && (
                <Badge color="blue" variant="filled" mb="sm">
                  Популярный
                </Badge>
              )}
              <Text fw={700} size="xl" mb={4}>
                {plan.name}
              </Text>
              <Text c="dimmed" size="sm" mb="md">
                {plan.description}
              </Text>
              <Title order={3} mb="md">
                {plan.price}
              </Title>
              <List
                spacing="sm"
                mb="xl"
                icon={
                  <ThemeIcon color="teal" size={20} radius="xl">
                    <IconCheck size={12} />
                  </ThemeIcon>
                }
              >
                {plan.features.map((f) => (
                  <List.Item key={f}>
                    <Text size="sm">{f}</Text>
                  </List.Item>
                ))}
              </List>
              <Button fullWidth variant={plan.highlighted ? 'filled' : 'outline'}>
                Выбрать
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  )
}
