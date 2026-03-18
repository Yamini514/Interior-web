import { useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { budgetRangeOptions, projectTypeOptions } from '../../data/contactPageContent'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budgetRange: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[+\d][\d\s-]{7,}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!values.projectType) {
    errors.projectType = 'Select a project type.'
  }

  if (!values.budgetRange) {
    errors.budgetRange = 'Select a budget range.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please share a short project brief.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.'
  }

  return errors
}

export function ContactForm({ onSuccess }) {
  const [values, setValues] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const errors = useMemo(() => validate(values), [values])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextTouched = Object.keys(initialForm).reduce((accumulator, key) => {
      accumulator[key] = true
      return accumulator
    }, {})

    setTouched(nextTouched)
    setSubmitError('')

    if (Object.keys(errors).length > 0) {
      return
    }

    try {
      setIsSubmitting(true)
      await new Promise((resolve) => window.setTimeout(resolve, 1300))
      setValues(initialForm)
      setTouched({})
      onSuccess('Thanks, your inquiry has been sent. We will get back to you shortly.')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-[32px] border border-white/12 bg-white/8 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl md:p-6"
      noValidate
    >
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/75">Project Inquiry</p>
        <h2 className="mt-3 text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Tell us about your space.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingField
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name ? errors.name : ''}
        />
        <FloatingField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email ? errors.email : ''}
        />
        <FloatingField
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone ? errors.phone : ''}
        />
        <FloatingField
          label="Project Type"
          name="projectType"
          value={values.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.projectType ? errors.projectType : ''}
          isSelect
          options={projectTypeOptions}
        />
        <div className="sm:col-span-2">
          <FloatingField
            label="Budget Range"
            name="budgetRange"
            value={values.budgetRange}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.budgetRange ? errors.budgetRange : ''}
            isSelect
            options={budgetRangeOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <FloatingField
            label="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message ? errors.message : ''}
            isTextarea
          />
        </div>
      </div>

      {submitError ? <p className="mt-4 text-sm text-rose-300">{submitError}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-white to-cyan-200 px-7 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </Motion.form>
  )
}

function FloatingField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  isTextarea = false,
  isSelect = false,
  options = [],
}) {
  const hasValue = value && value.length > 0
  const sharedClassName = `peer w-full rounded-[22px] border bg-black/15 px-4 pb-3 pt-6 text-white outline-none transition ${
    error
      ? 'border-rose-300/50 focus:border-rose-300'
      : 'border-white/12 focus:border-cyan-200/45'
  }`

  return (
    <label className="block">
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            rows={5}
            placeholder=" "
            className={`${sharedClassName} resize-y`}
          />
        ) : isSelect ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`${sharedClassName} appearance-none`}
          >
            <option value="" disabled />
            {options.map((option) => (
              <option key={option} value={option} className="text-slate-950">
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder=" "
            className={sharedClassName}
          />
        )}

        <span
          className={`pointer-events-none absolute left-4 transition-all ${
            hasValue || isSelect
              ? 'top-2 text-xs uppercase tracking-[0.2em] text-stone-400'
              : 'top-1/2 -translate-y-1/2 text-sm text-stone-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em]'
          }`}
        >
          {label}
        </span>

        {isSelect ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">
            v
          </span>
        ) : null}
      </div>

      {error ? <span className="mt-2 block text-xs text-rose-300">{error}</span> : null}
    </label>
  )
}
