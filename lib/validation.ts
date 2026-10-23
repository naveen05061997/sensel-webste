/**
 * Validates email addresses strictly according to modern enterprise web standards:
 * - Requires standard local part (characters, dots, numbers)
 * - Requires @ symbol
 * - Requires domain name
 * - Requires top-level domain (TLD) with at least 2 alphabetic characters (e.g. .com, .in, .org, .net, .co)
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;

  // Strict email regex matching modern standards
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(trimmed);
}
