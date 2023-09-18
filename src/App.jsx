import { useState } from 'react'
import './App.css' 
import { Modal } from './components/Modal'
import { Table } from './components/Table'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const rows = [rows, setRows] = useState([
    {provinsi: "Jawa Barat", kota: "Bogor", kabupaten:"Sukabumi"},
    {provinsi: "Bandung", kota: "Dago", kabupaten:"Cipularang"},
    {provinsi: "Jakarta", kota: "Sukamaju", kabupaten:"Sudirman"},
  ])

  const handleDeleteRow = (targetIndex)
  
  return <div className='App'>
    <Table />
    
      <Modal 

      />

  </div>
}

export default App
