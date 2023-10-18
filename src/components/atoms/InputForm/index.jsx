/**
 * InpurForm
 *
 * @package components
 */
// import styles from "./styles.module.css"


/**
 * InputForm
 * @returns {JSX.Element}
 * @constructor
 */
export const InputForm = (props) => {
  const { todoVal, handleTodoVal } = props
  return (
    <div>
      <input value={todoVal} onChange={handleTodoVal} />
    </div>
  )
}
