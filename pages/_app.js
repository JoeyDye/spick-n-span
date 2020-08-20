import '../styles.css'
import TodosProvider from '../providers/todosProvider'

export default function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <Component {...pageProps} />
    </TodosProvider>
  )
}
