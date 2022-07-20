import  {useEffect} from 'react'

// CREATING A CUSTOM HOOK
// creating a cutom hook, name must start with the word 'use'
function useDocumentTitle(count) {
    useEffect(() =>{
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
