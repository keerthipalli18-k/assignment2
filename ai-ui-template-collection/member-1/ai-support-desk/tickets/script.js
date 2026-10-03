const toast=document.getElementById('toast');
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);}
document.getElementById('themeBtn')?.addEventListener('click',()=>showToast('Theme preference updated.'));
document.getElementById('notifyBtn')?.addEventListener('click',()=>showToast('You have 3 new workspace notifications.'));
document.getElementById('primaryBtn')?.addEventListener('click',()=>showToast('New workspace item created.'));
document.getElementById('exportBtn')?.addEventListener('click',()=>showToast('Demo export prepared successfully.'));
document.getElementById('clearBtn')?.addEventListener('click',e=>{const list=e.target.closest('.panel')?.querySelector('.activity-list');if(list)list.innerHTML='<div><b>Activity cleared</b><small>Just now</small></div>';showToast('Recent activity cleared.');});
const input=document.getElementById('promptInput'),send=document.getElementById('sendBtn'),chat=document.getElementById('chatWindow');
function sendPrompt(){const value=input?.value.trim();if(!value){showToast('Type a message first.');return;}const u=document.createElement('div');u.className='message user';u.textContent=value;chat.appendChild(u);const a=document.createElement('div');a.className='message ai';a.textContent='Demo AI response: I would analyze your request, show relevant context, and let you confirm the next action.';chat.appendChild(a);input.value='';chat.scrollTop=chat.scrollHeight;showToast('AI response generated.');}
send?.addEventListener('click',sendPrompt);input?.addEventListener('keydown',e=>{if(e.key==='Enter')sendPrompt();});
document.getElementById('globalSearch')?.addEventListener('input',e=>{if(e.target.value.length>2)showToast('Searching workspace...');});
