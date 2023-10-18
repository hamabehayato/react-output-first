/**
 * TodoTemplate
 *
 * @package components
 */
import { useState } from "react"
import { InputForm } from "../../atoms/InputForm"
import styles from "./styles.module.css"
/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  const [todoVal, setTodoVal] = useState('')
  const [serchVal, setSerchVal] = useState('')

  const handleTodoVal = (e) => {
    setTodoVal(e.target.value)
  }
  const handleSearchVal = (e) => {
    setSerchVal(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1>TodoTemplate</h1>
      <h2>ADD TODO</h2>

      <InputForm todoVal={todoVal} handleTodoVal={handleTodoVal}/>
      <InputForm serchVal={serchVal} handleTodoVal={handleSearchVal}/>

    </div>
  )
}
