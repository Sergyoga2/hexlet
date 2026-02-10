import {
  Box,
  Card,
  SimpleGrid,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Container,
  Divider,
} from '@mantine/core'
import { IconArrowRight, IconCheck } from '@tabler/icons-react'
import classes from './PricingSection.module.css'

export function PricingSection() {
  const plans = [
    {
      name: 'Месячный',
      price: '3 900 ₽',
      description: 'Для знакомства с платформой',
      period: 'за месяц',
      features: [
        'Более 45 курсов',
        '130+ навыков для развития',
        'AI-помощник по обучению',
        'Онлайн-тренажер 24/7 с автопроверками',
        'Учебные проекты для тренировки',
        'Доступ в закрытое сообщество',
      ],
    },
    {
      name: 'Годовой',
      price: '2 900 ₽',
      description: 'Для непрерывного роста',
      period: 'за месяц',
      benefit: 'выгода 25%',
      details: 'при оплате 34 800 ₽ за год',
      features: ['Те же опции, но дешевле'],
      popular: true,
    },
    {
      name: 'Трехлетний',
      price: '2 400 ₽',
      description: 'Максимальная выгода без ограничений',
      period: 'за месяц',
      benefit: 'выгода 38%',
      details: 'при оплате 86 400 ₽ за три года',
      features: ['Все курсы Хекслета доступны для прохождения'],
    },
  ]

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack align="center" gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} fw={800} className={classes.heading}>
              Выберите подходящий план
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Гибкие варианты подписки для любых целей
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" w="100%">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                withBorder
                radius="lg"
                className={`${classes.card} ${plan.popular ? classes.popularCard : ''}`}
                padding="xl"
              >
                {plan.popular && <Box className={classes.popularBadge}>Популярный</Box>}

                <Stack gap="lg" h="100%">
                  <Stack gap="xs">
                    <Title order={3} className={classes.planName}>
                      {plan.name}
                    </Title>
                    <Text c="dimmed" size="sm">
                      {plan.description}
                    </Text>
                  </Stack>

                  <Group gap="xs" align="baseline">
                    <Text className={`${classes.price} ${plan.popular ? classes.popularPrice : ''}`}>
                      {plan.price}
                    </Text>
                    <Text c="dimmed" size="sm">
                      {plan.period}
                    </Text>
                  </Group>

                  {(plan.benefit || plan.details) && (
                    <Stack gap={2}>
                      {plan.benefit && <Text className={classes.benefit}>{plan.benefit}</Text>}
                      {plan.details && <Text className={classes.details}>{plan.details}</Text>}
                    </Stack>
                  )}

                  <Divider />

                  <Stack gap="sm" style={{ flex: 1 }}>
                    {plan.features.map((feature) => (
                      <Group key={feature} gap="sm" wrap="nowrap">
                        <IconCheck
                          color="var(--mantine-color-teal-6)"
                          width={18}
                          height={18}
                          style={{ flexShrink: 0 }}
                        />
                        <Text size="sm">{feature}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Button
                    size="md"
                    fullWidth
                    variant={plan.popular ? 'filled' : 'outline'}
                    rightSection={<IconArrowRight size={16} />}
                  >
                    Оформить подписку
                  </Button>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
