import { useState, useEffect } from 'react'

const useFetch = (url, fetcher) => {
  const [state, setState] = useState({ data: null, isLoading: false })

  useEffect(() => {
    const fn = async () => {
      setState({ data: null, isLoading: true })
      const data = await fetcher(url)
      setState({ data, isLoading: false })
    }
    fn()
  }, [fetcher, url])
  return state
}

export default useFetch
