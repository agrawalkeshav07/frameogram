import { CalendarCheck, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CTAButton from './CTAButton';
import SectionHeader from './SectionHeader';
import { appointmentMessage, notifyWhatsAppConstructionMode, whatsappUrl } from '../utils/whatsapp';

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  requirement: '',
};

export default function AppointmentBooking() {
  const [form, setForm] = useState(initialForm);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitAppointment = (event) => {
    event.preventDefault();
    notifyWhatsAppConstructionMode();
    window.open(whatsappUrl(appointmentMessage(form)), '_blank', 'noreferrer');
  };

  return (
    <section id="appointment" className="relative py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader eyebrow="Appointment Booking" title="Book your visit through WhatsApp in seconds.">
          Share your preferred date, time, and eyewear requirement. The form opens WhatsApp with your message ready to
          send to FRAMEOGRAM.
        </SectionHeader>

        <motion.form
          onSubmit={submitAppointment}
          className="glass-panel neon-border rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="rounded-full bg-frame-yellow p-3 text-frame-black">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-black text-white">Appointment details</h3>
              <p className="mt-1 text-sm text-white/60">WhatsApp-based booking, no backend needed.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/[0.72]">Name</span>
              <input
                required
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="rounded-2xl border border-white/10 bg-frame-black/70 px-4 py-4 text-white outline-none transition focus:border-frame-yellow/70"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/[0.72]">Phone number</span>
              <input
                required
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                className="rounded-2xl border border-white/10 bg-frame-black/70 px-4 py-4 text-white outline-none transition focus:border-frame-yellow/70"
                placeholder="Your phone number"
                inputMode="tel"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/[0.72]">Preferred date</span>
              <input
                required
                type="date"
                value={form.date}
                onChange={(event) => updateField('date', event.target.value)}
                className="rounded-2xl border border-white/10 bg-frame-black/70 px-4 py-4 text-white outline-none transition focus:border-frame-yellow/70"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/[0.72]">Preferred time</span>
              <input
                required
                type="time"
                value={form.time}
                onChange={(event) => updateField('time', event.target.value)}
                className="rounded-2xl border border-white/10 bg-frame-black/70 px-4 py-4 text-white outline-none transition focus:border-frame-yellow/70"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-white/[0.72]">Requirement / message</span>
              <textarea
                required
                rows="4"
                value={form.requirement}
                onChange={(event) => updateField('requirement', event.target.value)}
                className="resize-none rounded-2xl border border-white/10 bg-frame-black/70 px-4 py-4 text-white outline-none transition focus:border-frame-yellow/70"
                placeholder="Spectacles, sunglasses, eye checkup, repair, or styling help..."
              />
            </label>
          </div>

          <CTAButton type="submit" icon={MessageCircle} className="mt-6 w-full">
            Send Booking on WhatsApp
          </CTAButton>
        </motion.form>
      </div>
    </section>
  );
}
