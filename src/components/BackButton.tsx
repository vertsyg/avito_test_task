import { Button } from "antd"
import { Link } from "react-router-dom"
import { ArrowLeftOutlined } from '@ant-design/icons'

const BackButton = () => {
  return (
    <Button  type="primary" style={{marginBottom:'10px'}}>
      <Link to='/'><ArrowLeftOutlined/> Back to Main</Link>
    </Button>
  )
}

export default BackButton