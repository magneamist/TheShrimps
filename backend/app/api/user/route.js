export async function GET(req) {
    try {
      const user = await currentUser();
      if (!user) return new Response(JSON.stringify({ message: "No autenticado" }), { status: 401 });
  
      const dbUser = await getOrCreateUser(user);
      return new Response(JSON.stringify(dbUser), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Error interno del servidor", error }), { status: 500 });
    }
  }
  