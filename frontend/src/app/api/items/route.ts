import { NextResponse } from 'next/server';
import { itemModel } from "../../../backend/models/itemModel"; // Ruta hacia el modelo
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// GET - Obtener items
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 10;
  const offset = searchParams.get('offset') || 0;

  try {
    const items = await itemModel.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error getting items.' }, { status: 500 });
  }
}

// GET - Obtener item por ID
export async function GET_ITEM_BY_ID(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  try {
    const item = await itemModel.findOne({
      where: { id }
    });

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error getting the item.' }, { status: 500 });
  }
}

// POST - Crear un nuevo item
export async function POST(request: Request) {
  const data = await request.json();
  
  const {
    name,
    description,
    size,
    price,
    tag,
    favorite,
    seller_id,
    bought_id,
    userSell_id,
    image
  } = data;

  if (!name || !description || !price || !seller_id || !userSell_id) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newItem = await itemModel.create({
      name,
      description,
      size,
      price,
      tag,
      favorite,
      seller_id,
      bought_id,
      image,
      userSell_id,
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating the item.' }, { status: 500 });
  }
}

// PUT - Actualizar un item
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const data = await request.json();

  try {
    const item = await itemModel.findByPk(id);

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    await item.update(data);
    
    return NextResponse.json({ message: 'Item successfully updated', item });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating the item.' }, { status: 500 });
  }
}

// DELETE - Eliminar un item
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const item = await itemModel.findByPk(id);

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    await item.destroy();

    return NextResponse.json({ message: 'Item successfully deleted' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error deleting the item.' }, { status: 500 });
  }
}
