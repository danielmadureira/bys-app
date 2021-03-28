const NUMBER = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
})

const NAME = Object.freeze({
  SUNDAY: 'Dom.',
  MONDAY: 'Seg.',
  TUESDAY: 'Ter.',
  WEDNESDAY: 'Qua.',
  THURSDAY: 'Qui.',
  FRIDAY: 'Sex.',
  SATURDAY: 'Sáb.'
})

export const WEEK = {
  NUMBER,
  NAME
}