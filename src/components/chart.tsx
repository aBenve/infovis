import { cn } from '@/lib/utils'
import { ScrollArea } from './ui/scroll-area'

interface ChartProps {
  date: Date
  title: string
  description: string
  from: {
    label: string
    link: string
    color: string
  }
  img: string[]
}

function Chart({ date, title, description, from, img }: ChartProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {img.length > 0 ? (
        <ScrollArea className="w-full">
          <div className="flex w-full items-center gap-2">
            {img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="arc diagram"
                className="max-w-[30rem] rounded-md bg-white"
              />
            ))}
          </div>
        </ScrollArea>
      ) : null}

      <div className="flex w-full max-w-[30rem] flex-col gap-1">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="text-base text-foreground">{description}</p>
        <small className="text-xs text-muted-foreground">
          {new Date(date).toLocaleDateString()} - Create from{' '}
          {
            <a
              target="_blank"
              className={cn('hover:cursor-pointer hover:underline', from.color)}
              href={from.link}
            >
              {from.label}
            </a>
          }
        </small>
      </div>
    </div>
  )
}

export default Chart
