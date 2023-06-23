export const formatTypeName = (type) => {
  switch (type) {
    case 'full_time':
      return 'Full-time'

    case 'contracts_freelancing':
      return 'Contracts | Freelance work'

    case 'mentorship':
      return 'Mentorship'
  }
}

export const formatDate = (dateParam) => {
  const date = new Date(dateParam).toLocaleDateString('en-US')
  const [month, day, year] = date.split('/')

  if (month.length === 1) {
    month = `0${month}`
  }

  const formattedDate = `${month}/${year}`

  return formattedDate
}

export const formatExperienceText = (params) => {
  const { start_date, end_date, is_current, duration } = params

  let finalText = `${formatDate(start_date)} -`

  if (is_current) {
    finalText += ' Present'
  } else {
    finalText += ` ${formatDate(end_date)}`
  }

  finalText += ` · ${duration}`

  return finalText
}
