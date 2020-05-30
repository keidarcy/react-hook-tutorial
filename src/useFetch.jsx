import { useState, useEffect, useRef, useDebugValue } from 'react'

const useFetch = (url, fetcher) => {
  const [state, setState] = useState({ data: null, isLoading: false })
  const isMount = useRef(true)

  useDebugValue(isMount)

  useEffect(() => {
    return () => {
      isMount.current = false
    }
  }, [])
  useDebugValue(state)

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
  useDebugValue(isMount)

  return state
}

export default useFetch
