import Chart from './components/chart'
import { ScrollArea } from './components/ui/scroll-area'

const charts = [
  {
    date: '2024-8-19',
    title: 'Arc Diagram',
    description:
      'Graph showing the relationship between the number of male and female students in each plan.',
    from: {
      label: 'RawGraphs',
      link: 'https://app.rawgraphs.io/',
      color: 'text-green-400',
    },
    img: ['./charts/arc_diagram.svg'],
  },
  {
    date: '2024-9-23',
    title: 'Proyecto informacion personal',
    description:
      'This barchart shows the relationship between heartbeats and the course I had that day',
    from: {
      label: 'Observable',
      link: 'https://observablehq.com/d/654c713d121c433b',
      color: 'text-red-400',
    },
    img: ['./charts/stackedbar_courses_heart.svg', './charts/sleep_times.svg'],
  },
]

function App() {
  return (
    <div className="dark flex min-h-screen w-full flex-col gap-8 bg-background pb-10 text-foreground">
      <nav className="w-full border border-solid border-b-border">
        <div className="flex items-center justify-center gap-4 p-4">
          <span className="font-bold text-red-400">
            ab<span className="font-bold text-neutral-200">enve</span>
          </span>

          <img
            className="inline-block h-8 w-8 border-spacing-8 rounded-full border border-border"
            src="./images/ab-square.png"
            alt="abenve"
          />
        </div>
      </nav>
      <ScrollArea className="min-h-full">
        <div className="flex flex-col items-center gap-8">
          {charts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((chart, index) => (
              <Chart
                key={index}
                date={new Date(chart.date)}
                title={chart.title}
                description={chart.description}
                from={chart.from}
                img={chart.img}
              />
            ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default App
