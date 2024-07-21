'use client'

import { ReactNode } from 'react'
import { Card } from '../../_components/ui/card'
import { useCountdown } from '../../_utils/use-countdown'

function CountdownCard({
  name,
  children,
  variant = 'primary',
}: {
  children: ReactNode
  name: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Card
        className="flex px-5 py-3 flex-col justify-center items-center text-2xl font-bold min-h-[4.5rem] min-w-[4.5rem]"
        variant={variant}
      >
        {children}
      </Card>
      <p className='opacity-70 uppercase'>{name}</p>
    </div>
  )
}

export function Countdown() {
  const { seconds, minutes, hours, days } = useCountdown(new Date())
  return (
    <div className="flex gap-8">
      <CountdownCard variant="secondary" name="Dni">
        {days}
      </CountdownCard>
      <CountdownCard name="Godzin">{hours}</CountdownCard>
      <CountdownCard name="Minut">{minutes}</CountdownCard>
      <CountdownCard name="Sekund">{seconds}</CountdownCard>
    </div>
  )
}