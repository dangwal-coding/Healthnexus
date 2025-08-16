import React, { useState, useEffect } from 'react'
import HeroCarousel from '../shared/HeroCarousel'
import SearchBar from '../shared/SearchBar'
import TestCard from '../shared/TestCard'
import BookingModal from '../shared/BookingModal'
import Footer from '../../Elements/Footer'
import axios from 'axios'

export default function Home() {
  const [query, setQuery] = useState('')
  const [selectedTest, setSelectedTest] = useState(null)
  const [tests, setTests] = useState([])

  useEffect(() => {
    async function fetchLabData() {
      try {
        const response = await axios.get('http://localhost:8000/lab')
        if (response.data.msg === "success") {
          setTests(response.data.value)
        }
      } catch {
        alert('Failed to fetch lab tests')
      }
    }
    fetchLabData()
  }, [])

  const filtered = tests.filter(t => (t.testName || '').toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div className="container-fluid p-0">
        <div className="container mt-4">
          <div className="py-4">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
          <HeroCarousel />

          <h2 className="mb-4 fw-bold mt-4" style={{letterSpacing: '1px'}}>Recommended Tests</h2>
          <div className="row gy-4">
            {filtered.map(test => (
              <div key={test._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="p-3 bg-white rounded shadow-sm h-100">
                  <TestCard
                    test={{
                      ...test,
                      image: [`http://localhost:8000/public/image/labtest/${test.imageUrl}`]
                    }}
                    onBook={() => setSelectedTest(test)}
                  />
                </div>
              </div>
            ))}
          </div>

          <footer className="mt-5 py-4 text-center text-muted">
            © {new Date().getFullYear()} Health Nexus Lab Test
          </footer>
        </div>
        <Footer />
      </div>
      {selectedTest && (
        <BookingModal test={selectedTest} onClose={() => setSelectedTest(null)} />
      )}
    </>
  )
}
