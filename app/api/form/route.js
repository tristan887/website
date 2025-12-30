export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Email and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // For now, just log the message to the server console
    console.log('New message received:', { name, email, message });

    // TODO: Send email or save to database here

    return new Response(JSON.stringify({ message: 'Message received successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
