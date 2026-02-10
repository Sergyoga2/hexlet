import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  ThemeIcon,
} from '@mantine/core'
import {
  IconRocket,
  IconShieldCheck,
  IconChartBar,
} from '@tabler/icons-react'

const features = [
  {
    icon: IconRocket,
    title: 'Быстрый запуск',
    description:
      'Начните работу за считанные минуты. Простая настройка без сложных конфигураций.',
  },
  {
    icon: IconShieldCheck,
    title: 'Надёжность и безопасность',
    description:
      'Ваши данные защищены на всех уровнях. Шифрование, резервные копии и мониторинг 24/7.',
  },
  {
    icon: IconChartBar,
    title: 'Аналитика в реальном времени',
    description:
      'Отслеживайте ключевые метрики и принимайте решения на основе данных.',
  },
]

export function FeaturesSection() {
  return (
    <Container size="lg" py={80}>
      <Title order={2} ta="center" mb="md">
        Почему выбирают нас
      </Title>
      <Text ta="center" c="dimmed" mb={50} maw={600} mx="auto">
        Три причины, по которым клиенты остаются с нами надолго
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {features.map((feature) => (
          <Card key={feature.title} shadow="sm" padding="xl" radius="md">
            <ThemeIcon size={50} radius="md" variant="light" mb="md">
              <feature.icon size={28} />
            </ThemeIcon>
            <Text fw={600} size="lg" mb="xs">
              {feature.title}
            </Text>
            <Text c="dimmed" size="sm">
              {feature.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}
