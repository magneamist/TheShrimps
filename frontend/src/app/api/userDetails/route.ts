import { NextResponse } from 'next/server';
import { Clerk } from '@clerk/clerk-sdk-node'; // Asegúrate de que esta importación es correcta
import { userDetailModel } from "../../../backend/models/userDetailModel"; // Ruta hacia el modelo de tu base de datos

const apiKey = process.env.CLERK_API_KEY;
if (!apiKey) {
  throw new Error("CLERK_API_KEY is not defined");
}

// Configuración de Clerk
const clerk = Clerk({ apiKey });

// POST - Signup (registro de usuario)
export async function POST(request: Request) {
  const data = await request.json();
  const { email, password, firstname, lastname } = data;

  // Validación de los campos necesarios
  if (!email || !password || !firstname || !lastname) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  try {
    // Crear el usuario en Clerk con el email y password
    const user = await clerk.users.create({
      email,
      password,
    });

    // Ahora que el usuario está creado en Clerk, guarda el detalle en tu base de datos
    await userDetailModel.create({
      clerk_user_id: user.id, // Usamos el ID de Clerk como referencia en nuestra base de datos
      firstname,
      lastname,
      email,
      profile_image: null, // Puedes agregar otros campos si lo deseas
    });

    return NextResponse.json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error signing up." }, { status: 500 });
  }
}

// POST - Login (inicio de sesión)
export async function LOGIN(request: Request) {
  const data = await request.json();
  const { email, password } = data;

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
  }

  try {
    // Verificar las credenciales en Clerk
    const user = await clerk.users.verifyPassword({ email, password });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Crear una nueva sesión en Clerk
    const session = await clerk.sessions.create({ userId: user.id });

    return NextResponse.json({
      message: "Login successful",
      token: session.jwtToken,
      clerk_user_id: user.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error logging in." }, { status: 500 });
  }
}

// PUT - Actualizar detalles del usuario
export async function PUT(request: Request) {
  const data = await request.json();
  const { userId, firstname, lastname, profile_image, city } = data;

  // Validación de que el userId es obligatorio
  if (!userId) {
    return NextResponse.json({ message: "User ID is required." }, { status: 400 });
  }

  try {
    // Buscar al usuario en tu base de datos usando el ID de Clerk
    const userDetail = await userDetailModel.findOne({ where: { clerk_user_id: userId } });
    if (!userDetail) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // Actualizar los campos del usuario en tu base de datos
    userDetail.firstname = firstname || userDetail.firstname;
    userDetail.lastname = lastname || userDetail.lastname;
    userDetail.profile_image = profile_image || userDetail.profile_image;
    userDetail.city = city || userDetail.city;

    // Guardar los cambios
    await userDetail.save();

    return NextResponse.json({ message: "User details updated successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating user details." }, { status: 500 });
  }
}

// GET - Obtener todos los usuarios (si lo necesitas)
export async function GET(request: Request) {
  try {
    const users = await userDetailModel.findAll();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error getting users." }, { status: 500 });
  }
}

// GET - Obtener un usuario por su ID (si lo necesitas)
export async function GET_USER_BY_ID(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const user = await userDetailModel.findByPk(id);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error getting user." }, { status: 500 });
  }
}
