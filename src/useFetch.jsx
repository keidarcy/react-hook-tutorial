import { useState, useEffect, useRef } from 'react'

const useFetch = (url, fetcher) => {
  const [state, setState] = useState({ data: null, isLoading: false })
  const isMount = useRef(true)

  useEffect(() => {
    return () => {
      isMount.current = false
    }
  }, [])

  useEffect(() => {
    const fn = async () => {
      setState({ data: null, isLoading: true })
      const data = await fetcher(url)
      setTimeout(() => {
        if (isMount.current) {
          setState({ data, isLoading: false })
        }
      }, 2000)
    }
    fn()
  }, [fetcher, url])
  return state
}

export default useFetch
