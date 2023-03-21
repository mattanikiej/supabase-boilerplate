import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js'

const supabaseUrl = 'https://jebtrqhwkhlnpdlwnuyi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYnRycWh3a2hsbnBkbHdudXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODU1NTAsImV4cCI6MTk5MzM2MTU1MH0._UZntUWZlu20Fp8UvN80MGGPAKqxWNtbQrETdoCqPvc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}

getBooks();


