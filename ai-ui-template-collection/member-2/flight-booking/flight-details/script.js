const toast=document.getElementById('toast');
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast)));
document.querySelectorAll('[data-action="explore"]').forEach(b=>b.addEventListener('click',()=>showToast('Explore the destinations below!')));
document.querySelectorAll('[data-action="book"]').forEach(b=>b.addEventListener('click',()=>showToast('Booking flow started')));
const form=document.getElementById('mainForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();showToast('Details saved successfully!')});
const pay=document.getElementById('payBtn');
if(pay)pay.addEventListener('click',()=>showToast('Payment demo completed successfully!'));
const download=document.querySelector('[data-action="download"]');
if(download)download.addEventListener('click',()=>showToast('Confirmation is ready to download!'));
const search=document.getElementById('searchBox');
if(search)search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.searchable').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(q)?'block':'none')});
const menu=document.getElementById('menuBtn');
if(menu)menu.addEventListener('click',()=>showToast('Use the desktop navigation links to explore this demo.'));
