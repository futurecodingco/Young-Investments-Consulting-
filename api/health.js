export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    entity: 'Young Investments Consulting Holdings (Pty) Ltd',
    registrationNumber: '2026/020088/07',
    jurisdiction: 'Pretoria, Gauteng, Republic of South Africa',
    platform: 'Vercel',
    timestamp: new Date().toISOString()
  });
}
