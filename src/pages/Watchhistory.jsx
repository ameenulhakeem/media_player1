import { Link } from 'react-router-dom';
import { deleteHistory, getHistory } from '../services/allAPI';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Watchhistory() {
    const [history, setHistory] = useState([])
    const [deleteHistoryItem,setDeleteHistoryItem]=useState(false)
    const getAllHistory = async () => {
        const response = await getHistory();
        console.log(response);
        setHistory(response.data)
    }
    useEffect(() => {
        getAllHistory();
        setDeleteHistoryItem(false)
    }, [deleteHistoryItem])

    const handleDelete = async (id) => {
            const result = await deleteHistory(id);
            setDeleteHistoryItem(true)
        }
        return (
            <>
                <div className='container d-flex justify-content-between my-5'>
                    <h3>Watch History</h3>
                    <Link style={{ color: 'white', textDecoration: 'none', fontFamily: '-moz-initial' }} to={'/home'}>
                        <button className='btn btn-secondary' style={{ fontFamily: 'monospace' }}><i class="fa-solid fa-arrow-left "></i> Back to Home</button>
                    </Link>
                </div>
                <table className='container table my-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Caption</th>
                            <th>URL</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.length > 0 ?
                                history.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.caption}</td>
                                        <td>{item.embededLink}</td>
                                        <td>{item.timeStamp}</td>
                                        <td><Button variant="danger" onClick={() => handleDelete(item.id)}>
                                            <i class="fa-solid fa-trash fa-sm"></i></Button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <p>no ite  to display</p>
                        }
                    </tbody>
                </table>
            </>
        )
    }

    export default Watchhistory;