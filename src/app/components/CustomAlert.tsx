// app/components/CustomAlert.tsx
import { Alert } from 'react-bootstrap';

export default function CustomAlert() {
  return (
    <Alert variant="primary" className="text-center py-4">
      <h4 className="alert-heading">Proteja sua Empresa com Manutenção de TI Especializada</h4>
      <p>Evite prejuízos com nossa manutenção preventiva.</p>
    </Alert>
  );
}
