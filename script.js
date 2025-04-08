const form = document.getElementById("form-aluno");
const lista = document.getElementById("lista-alunos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const curso = document.getElementById("curso").value;
  const email = document.getElementById("email").value;

  const li = document.createElement("li");
  li.textContent = `Nome: ${nome} | Idade: ${idade} | Curso: ${curso} | Email: ${email}`;
  lista.appendChild(li);

  form.reset();
});