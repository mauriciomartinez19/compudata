import { CreateMailOptionsProps } from "@/app/lib/types/mail";

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consulta página web</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 5px;
    }
    h2 {
      color: #333;
    }
    p {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Consulta página web</h2>
    <p><strong>Nombre:</strong> {{name}}</p>
    <p><strong>Correo electrónico:</strong> {{replyTo}}</p>
    <p><strong>Contenido:</strong></p>
    <p>{{content}}</p>
    {{#if phoneNumber}}
  </div>
</body>
</html>
`;

export const createTemplate = ({
  name,
  replyTo,
  content,
  phoneNumber,
}: CreateMailOptionsProps) => {
  return template
  .replace("{{name}}", name)
  .replace("{{replyTo}}", replyTo)
  .replace("{{content}}", content)
  .replace(
    "{{#if phoneNumber}}",
    phoneNumber
      ? "<p><strong>Número de teléfono:</strong> " + phoneNumber + "</p>"
      : ""
  )
}