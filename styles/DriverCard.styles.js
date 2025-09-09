import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // --- Variante détaillée ---
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: 300,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  job: { fontSize: 14, color: "#666", marginVertical: 4 },
  rating: { fontSize: 14, color: "#f39c12" },
  contact: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 12,
  },
  contactItem: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  // --- Variante compacte ---
  compactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  compactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  compactInfo: { flex: 1 },
  iconButton: {
    backgroundColor: "#007BFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
