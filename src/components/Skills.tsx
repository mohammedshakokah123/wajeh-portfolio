const skills = [
  "Dart",
  "Flutter",
  "Clean Architecture",
  "Bloc / Cubit",
  "Dependency Injection (DI)",
  "Flavor & Env Config",
  "TDD & Testing",
  "CI/CD (Current Learning)",
  "REST APIs",
  "Firebase",
  "Secure Storage & SharedPreferences",
  "Sqflite",
  "App Store & Play Store",
  "Push Notifications (FCM)",
  "Google Maps",
  "Payment Gateways",
];

export default function Skills() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
