import { Container, Title, Text, Accordion } from '@mantine/core'

const faqItems = [
  {
    question: 'Как начать работу?',
    answer:
      'Зарегистрируйтесь на сайте, подтвердите email и вы сразу получите доступ к бесплатному тарифу. Никакой привязки карты.',
  },
  {
    question: 'Можно ли перейти на другой тариф?',
    answer:
      'Да, вы можете в любой момент повысить или понизить тариф. Разница будет пересчитана автоматически.',
  },
  {
    question: 'Есть ли пробный период для платных тарифов?',
    answer:
      'Да, мы предоставляем 14-дневный бесплатный пробный период для тарифа «Бизнес».',
  },
  {
    question: 'Как связаться с поддержкой?',
    answer:
      'Вы можете написать нам на support@example.com или воспользоваться чатом на сайте. Время ответа — до 2 часов.',
  },
]

export function FaqSection() {
  return (
    <Container size="sm" py={80}>
      <Title order={2} ta="center" mb="md">
        Часто задаваемые вопросы
      </Title>
      <Text ta="center" c="dimmed" mb={50}>
        Ответы на популярные вопросы
      </Text>
      <Accordion variant="separated">
        {faqItems.map((item) => (
          <Accordion.Item key={item.question} value={item.question}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>
              <Text size="sm" c="dimmed">
                {item.answer}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}
