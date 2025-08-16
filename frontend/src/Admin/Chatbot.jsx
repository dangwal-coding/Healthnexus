// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Chatbot() {
//   const [unanswered, setUnanswered] = useState([]);
//   const [answered, setAnswered] = useState([]);
//   const [editAnswer, setEditAnswer] = useState({}); // store answers typed by admin keyed by question id

//   // Fetch unanswered questions
//   const fetchUnanswered = async () => {
//     const res = await axios.get('http://localhost:8000/api/questions/unanswered');
//     setUnanswered(res.data);
//   };

//   // Fetch answered questions
//   const fetchAnswered = async () => {
//     const res = await axios.get('http://localhost:8000/api/questions/answered');
//     setAnswered(res.data);
//   };

//   useEffect(() => {
//     fetchUnanswered();
//     fetchAnswered();
//   }, []);

//   // Handle answer when input will change
//   const handleInputChange = (id, value) => {
//     setEditAnswer(prev => ({ ...prev, [id]: value }));
//   };

//   // Submit answer for a question
//   const handleSubmitAnswer = async (id) => {
//     const answer = editAnswer[id];
//     if (!answer || answer.trim() === '') return alert("Answer cannot be empty");
//     try {
//       await axios.put(http://localhost:8000/api/questions/${id}, {
//         adminReply: answer,
//         status: 'answered'
//       });
//       setEditAnswer(prev => {
//         const copy = { ...prev };
//         delete copy[id];
//         return copy;
//       });
//       // Refresh lists
//       fetchUnanswered();
//       fetchAnswered();
//     } catch  {
//       alert("Error submitting answer");
//     }
//   };

//   // Delete question
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(http://localhost:8000/api/questions/${id});
//       // Refresh lists
//       fetchUnanswered();
//       fetchAnswered();
//     } catch {
//       alert("Error deleting question");
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Admin Panel</h2>

//       <div style={{ display: 'flex', gap: '40px' }}>
//         {/* Unanswered Section */}
//         <div style={{ flex: 1 }}>
//           <h3>Unanswered Questions</h3>
//           {unanswered.length === 0 && <p>No unanswered questions</p>}
//           {unanswered.map(q => (
//             <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
//               <p><b>Question:</b> {q.message}</p>
//               <textarea
//                 rows={3}
//                 placeholder="Write your answer here"
//                 value={editAnswer[q._id] || ''}
//                 onChange={e => handleInputChange(q._id, e.target.value)}
//                 style={{ width: '100%' }}
//               />
//               <button onClick={() => handleSubmitAnswer(q._id)}>Submit Answer</button>
//               <button onClick={() => handleDelete(q._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
//             </div>
//           ))}
//         </div>

//         {/* Answered Section */}
//         <div style={{ flex: 1 }}>
//           <h3>Answered Questions</h3>
//           {answered.length === 0 && <p>No answered questions</p>}
//           {answered.map(q => (
//             <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
//               <p><b>Question:</b> {q.message}</p>
//               <p><b>Answer:</b> {q.adminReply}</p>
//               <button onClick={() => handleDelete(q._id)} style={{ color: 'red' }}>Delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;// import React, { useEffect, useState } from 'react';
import axios from 'axios';

// function AdminPage() {


//   const [unanswered, setUnanswered] = useState([]);
//   const [answered, setAnswered] = useState([]);
//   const [editAnswer, setEditAnswer] = useState({}); // store answers typed by admin keyed by question id

//   // Fetch unanswered questions
//   const fetchUnanswered = async () => {
//     const res = await axios.get('http://localhost:8000/api/questions/unanswered');
//     setUnanswered(res.data);
//   };

//   // Fetch answered questions
//   const fetchAnswered = async () => {
//     const res = await axios.get('http://localhost:8000/api/questions/answered');
//     setAnswered(res.data);
//   };

//   useEffect(() => {
//     fetchUnanswered();
//     fetchAnswered();
//   }, []);

//   // Handle answer when input will change
//   const handleInputChange = (id, value) => {
//     setEditAnswer(prev => ({ ...prev, [id]: value }));
//   };

//   // Submit answer for a question
//   const handleSubmitAnswer = async (id) => {
//     const answer = editAnswer[id];
//     if (!answer || answer.trim() === '') return alert("Answer cannot be empty");
//     try {
//       await axios.put(http://localhost:8000/api/questions/${id}, {
//         adminReply: answer,
//         status: 'answered'
//       });
//       setEditAnswer(prev => {
//         const copy = { ...prev };
//         delete copy[id];
//         return copy;
//       });
//       // Refresh lists
//       fetchUnanswered();
//       fetchAnswered();
//     } catch (err) {
//       alert("Error submitting answer");
//     }
//   };

//   // Delete question
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(http://localhost:8000/api/questions/${id});
//       // Refresh lists
//       fetchUnanswered();
//       fetchAnswered();
//     } catch (err) {
//       alert("Error deleting question");
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Admin Panel</h2>

//       <div style={{ display: 'flex', gap: '40px' }}>
//         {/* Unanswered Section */}
//         <div style={{ flex: 1 }}>
//           <h3>Unanswered Questions</h3>
//           {unanswered.length === 0 && <p>No unanswered questions</p>}
//           {unanswered.map(q => (
//             <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
//               <p><b>Question:</b> {q.message}</p>
//               <textarea
//                 rows={3}
//                 placeholder="Write your answer here"
//                 value={editAnswer[q._id] || ''}
//                 onChange={e => handleInputChange(q._id, e.target.value)}
//                 style={{ width: '100%' }}
//               />
//               <button onClick={() => handleSubmitAnswer(q._id)}>Submit Answer</button>
//               <button onClick={() => handleDelete(q._id)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
//             </div>
//           ))}
//         </div>

//         {/* Answered Section */}
//         <div style={{ flex: 1 }}>
//           <h3>Answered Questions</h3>
//           {answered.length === 0 && <p>No answered questions</p>}
//           {answered.map(q => (
//             <div key={q._id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
//               <p><b>Question:</b> {q.message}</p>
//               <p><b>Answer:</b> {q.adminReply}</p>
//               <button onClick={() => handleDelete(q._id)} style={{ color: 'red' }}>Delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;




import React, { useEffect, useState } from 'react';

function AdminPage() {
  const [unanswered, setUnanswered] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [editAnswer, setEditAnswer] = useState({});

  const fetchUnanswered = async () => {
    const res = await axios.get('http://localhost:8000/api/questions/unanswered');
    setUnanswered(res.data.questions || res.data);
  };

  const fetchAnswered = async () => {
    const res = await axios.get('http://localhost:8000/api/questions/answered');
    setAnswered(res.data.questions || res.data);
  };

  useEffect(() => {
    fetchUnanswered();
    fetchAnswered();
  }, []);

  const handleInputChange = (id, value) => {
    setEditAnswer(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmitAnswer = async (id) => {
    const answer = editAnswer[id];
    if (!answer || answer.trim() === '') return alert("Answer cannot be empty");
    try {
      await axios.put(`http://localhost:8000/api/questions/${id}`, {
        adminReply:answer,
        status:'answered'
      });
      setEditAnswer(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      fetchUnanswered();
      fetchAnswered();
    } catch {
      alert("Error submitting answer");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/questions/${id}`);
      fetchUnanswered();
      fetchAnswered();
    } catch{
      alert("Error deleting question");
    }
  };

  return (
    <div style={{
      padding: '30px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#222' }}>Admin Panel</h2>

      <div style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {/* Unanswered Section */}
        <section style={{
          flex: '1 1 450px',
          maxWidth: '600px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)',
          padding: '20px',
          height: '75vh',
          overflowY: 'auto'
        }}>
          <h3 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px', color: '#4CAF50' }}>Unanswered Questions</h3>
          {unanswered.length === 0 && <p style={{ color: '#777', marginTop: '20px' }}>No unanswered questions</p>}
          {unanswered.map(q => (
            <div key={q._id} style={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '15px',
              marginBottom: '18px',
              backgroundColor: '#fafafa',
              boxShadow: 'inset 0 0 5px #eee'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '8px', color: '#333' }}><b>Q:</b> {q.message}</p>
              <textarea
                rows={3}
                placeholder="Write your answer here"
                value={editAnswer[q._id] || ''}
                onChange={e => handleInputChange(q._id, e.target.value)}
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  padding: '8px',
                  resize: 'vertical',
                  fontSize: '14px',
                  marginBottom: '10px',
                  fontFamily: 'inherit'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => handleSubmitAnswer(q._id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#45a049'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
                >
                  Submit Answer
                </button>
                <button
                  onClick={() => handleDelete(q._id)}
                  style={{
                    backgroundColor: '#f44336',
                    border: 'none',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#da190b'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f44336'}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Answered Section */}
        <section style={{
          flex: '1 1 450px',
          maxWidth: '600px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)',
          padding: '20px',
          height: '75vh',
          overflowY: 'auto'
        }}>
          <h3 style={{ borderBottom: '2px solid #2196F3', paddingBottom: '10px', color: '#2196F3' }}>Answered Questions</h3>
          {answered.length === 0 && <p style={{ color: '#777', marginTop: '20px' }}>No answered questions</p>}
          {answered.map(q => (
            <div key={q._id} style={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '15px',
              marginBottom: '18px',
              backgroundColor: '#f0f7ff',
              boxShadow: 'inset 0 0 5px #d0e6ff'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '6px', color: '#333' }}><b>Q:</b> {q.message}</p>
              <p style={{ backgroundColor: '#e8f0fe', padding: '8px', borderRadius: '5px', color: '#0b3d91', fontWeight: '600' }}>
                <b>A:</b> {q.adminReply}
              </p>
              <button
                onClick={() => handleDelete(q._id)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#f44336',
                  border: 'none',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#da190b'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f44336'}
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default AdminPage;