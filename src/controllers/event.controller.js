const createEventIntoDB = async (req, res) => {
  const { name, date, start_time, end_time, location, description } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO events (name, date, start_time, end_time, location, description)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, date, start_time, end_time, location, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: 'Time conflict with another event at this location' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = {
	createEventIntoDB
}