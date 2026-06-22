import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export const sendVerificationEmail = async (toEmail, nombre, token) => {
    const verifyUrl = `${process.env.FRONTEND_URL}/verificar/${token}`

    await transporter.sendMail({
        from: `"Tabla Periódica EAE" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Verificá tu cuenta',
        html: `
            <h2>¡Hola ${nombre}!</h2>
            <p>Hacé clic para activar tu cuenta:</p>
            <a href="${verifyUrl}">Verificar mi cuenta</a>
            <p>Este link expira en 24 horas.</p>
        `,
    })
}